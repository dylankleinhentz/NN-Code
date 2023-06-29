pipeline{
    agent any

    tools{nodejs "node"}

    stage('Cypress Test Suite'){
            steps{
                git url 'https://github.com/dylankleinhentz/NN-Code.git'
                bat 'npm install'
                bat 'npm update'
                bat 'npm run triggerAllTests-headless'
            }
        }
}