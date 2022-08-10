class Application{
    constructor(name, description,  image, status, apikey, apisecret){
        this.name = name;
        this.description = description;
        this.image = image;
        this.status = status;
        this.apiKey = apikey;
        this.apiSecret = apisecret;
    }
}

module.exports = {Application};