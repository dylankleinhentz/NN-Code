pipeline {
    agent any
    tools{nodejs "node"}
    stages {
        stage ('Test Suite') {
            steps {
                //script { 
                    git url 'https://github.com/dylankleinhentz/NN-Code.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npm run triggerAllTests-headless'
                //}
            }
        }
    }
}