// create, update, delete
const People = require('../Model/People');

    exports.index = (request, response) => {
        People.get((err, people) => {
            if (err) {
                response.json({
                    status: "error",
                    message: err.message
                })
            }
            response.json({
                status: "SUCCESS",
                message: "Lista de Usuarios Inseridas",
                dados: people
            })
        })
    };
    
    exports.store = (request, response) => {
        let people = new People();
        people.name = request.body.name ? request.body.name : people.name;
        people.email = request.body.email;
        people.latitude = request.body.latitude;
        people.longitude = request.body.longitude;
        people.date_created = new Date();
    
        people.save((err) => {
            if (err) {
                response.json(err);
            }
            response.json({
                message: "Usuario Salvo!",
                dados: people
            })
        })
    };

    exports.update = (request, response) => {
        People.findById(request.params.id, (err, people) => {
            if (err) response.send(err);
            people.name = request.body.name;
            people.email = request.body.email;
            people.latitude = request.body.latitude;
            people.longitude = request.body.longitude;
            people.date_updated = new Date();
    
            people.save(err => {
                if (err) response.json(err);
                response.json({
                    message: "Usuario atualizado com sucesso!",
                    dados: people
                })
            })
        })
    };
    
    exports.delete = (request, response) => {
    
        People.deleteOne({
            _id: request.body.id
        }, (err, response) => {
            if (err) response.send(err);
            response.json({
                status: 'SUCCESS',
                message: 'Usuario deletado(a) com sucesso!'
            })
        });
    };