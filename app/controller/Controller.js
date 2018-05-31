class Controller {
    constructor(genericType) {
        this.genericType = genericType;
    }

    manageMongoReturn(err, data, callback) {
        if (err) {
            console.error(err);
            callback(err);
        } else {
            callback(data);
        }
    }

    getAll(callback) {
        this.genericType.find((err, data) => {
            this.manageMongoReturn(err, data, callback);
        });
    }

    getOne(id, callback) {
        this.genericType.findById(id, (err, data) => {
            this.manageMongoReturn(err, data, callback);
        });
    }

    addOne(params, callback) {
        const Model = this.genericType;
        const object = new Model(params);

        object.save((err, data) => {
            this.manageMongoReturn(err, data, callback);
        });
    }

    updateOne(id, params, callback) {
        this.genericType.updateOne({ _id: id }, params, (err, data) => {
            this.manageMongoReturn(err, data, callback);
        });
    }

    deleteOne(id, callback) {
        this.genericType.deleteOne({ _id: id }, (err, data) => {
            this.manageMongoReturn(err, data, callback);
        });
    }
}

module.exports = Controller;
