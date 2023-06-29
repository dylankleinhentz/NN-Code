pipeline{
    agent any

    tools{nodejs "node"}

    stages{
        stage('Cypress Test Suite'){
            step{
                git url 'https://github.com/dylankleinhentz/NN-Code.git'
                bat 'npm install'
                bat 'npm update'
                bat 'npm run triggerAllTests-headless'
            }
        }
        
    }
}