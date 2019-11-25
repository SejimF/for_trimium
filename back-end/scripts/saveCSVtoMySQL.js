const fs = require("fs"),
  fastcsv = require("fast-csv");

const dbPool = require('../utils/database').pool;

console.log('Подготавливаем список');

let csvData = [];
fs.createReadStream("scripts/import.csv")
  .pipe(fastcsv.parse({
    delimiter: ";"
  }))
  .on("data", function (data) {

    csvData.push(data);
  })
  .on("end", function () {

    csvData.shift();

    console.log('Список подготовлен');


    dbPool.getConnection((error, connection) => {

      if (error) {
        console.error(error);
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

        connection.query(profiles, function (err, results, fields) {

          if (err) {
            console.log(err.message)
          } else {

            let query = `INSERT INTO test (active, name, last_name, email, xml_id, personal_gender, personal_birthday, work_position, region, city) VALUES ?`;

            connection.query(query, [csvData], (error, responseQuery) => {

              if (error) {
                console.log(error.sqlMessage);
              } else {
                console.log('Результат');
                console.log(responseQuery);
              }

            });

          }

        });


      }
    });
  });