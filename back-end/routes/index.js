const express = require("express"),
      router  = express.Router(),
      formidable = require('formidable'),

      fs = require("fs"),
      fastcsv = require("fast-csv");
      const dbPool = require('../utils/database').pool;

    router.get("/", function (req, res) {
        res.render("landing");
    });

    router.post("/send-file", function (req, res) {


        let response = 'asdasdsadsad';

        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            let csvData = [];


            let filePath =  files.csv.path;
            response += `Собираем информацию \n`;
            fs.createReadStream(filePath)
              .pipe(fastcsv.parse( {delimiter:";"} ))
              .on("data", function(data) {

                csvData.push(data);
              })
              .on("end", function() {
                // remove the first line: header
                csvData.shift();

      
                response += `Список подготовлен \n`;

                // open the connection
                dbPool.getConnection((error, connection) => {
                  if (error) {
                    response = `Ошибка Соединения с ДБ ${error}`;
                  } else {

                    let profiles = `create table if not exists test(
                        active varchar(255) not null,
                        name varchar(255) not null,
                        last_name varchar(255) not null,
                        email varchar(255) not null,
                        xml_id varchar(255) primary key,
                        personal_gender varchar(255) not null,
                        personal_birthday varchar(255) not null,
                        work_position varchar(255) not null,
                        region varchar(255) not null,
                        city varchar(255) not null
                    )`;


                    response += `Записываем \n`;

                    connection.query(profiles, function(err, results, fields) {
                        if (err) {
                          return  res.status(507).render('error', {
                            response: err.message,
                          });
                        } else {

                            let query = `INSERT INTO test (active, name, last_name, email, xml_id, personal_gender, personal_birthday, work_position, region, city) VALUES ?`;

                            connection.query(query, [csvData], (error, responseQuery) => {
                                if (error) {
                                  response += `Ошибка:  ${error}`;
                                  connection.release();
                                  return  res.status(507).render('error', {
                                      response: response,
                                    });

                              } else {
                                  connection.release();
                                  console.log("Added to table");
                                  return res.status(201).render('fileuploaded.ejs', {
                                      responseQuery: responseQuery
                                    });
                                }
                              });

                        }
                      });

                  }
                });

              });
              
          });

    });

    module.exports = router;