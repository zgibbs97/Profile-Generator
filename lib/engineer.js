const employee = require ("./employee");

class Engineer extends employee {

    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGitub() {
        return this.github;
    }
}

module.exports = Engineer;