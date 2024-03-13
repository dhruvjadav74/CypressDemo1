class Main {
    
    SetViewPort(width, height){
        cy.viewport(width, height);
    }
    
    async LoadUserData() {
        let UserData;
        const data = await cy.fixture('example.json');
        UserData = data.UserData;
        return UserData;
    }
}
module.exports = new Main();
