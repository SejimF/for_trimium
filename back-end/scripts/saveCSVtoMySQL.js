const fs = require("fs"),
      fastcsv = require("fast-csv");

      const db = require('../utils/database');

      console.log('Подготавливаем список');

      let csvData = [];
      fs.createReadStream("scripts/import.csv")
        .pipe(fastcsv.parse( {delimiter:";"} ))
        .on("data", function(data) {
            
          csvData.push(data);
        })
        .on("end", function() {
          // remove the first line: header
          csvData.shift();

          console.log('Список подготовлен');
        
          // open the connection
          db.connect(error => {
            if (error) {
              console.error(error);
            } else {
      
              let query = `INSERT INTO test (active, name, last_name, email, xml_id, personal_gender, personal_birthday, work_position, region, city) VALUES ?`;

              db.query(query, [csvData], (error, response) => {

                if (error) {
                    console.log(error);
                } else {
                    console.log('Результат');
                    console.log(response);
                }

              });
            }
          });
        });