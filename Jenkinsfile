pipeline{
    agent any

    tools{nodejs "node"}

    stages{
        stage('Cypress Parallel Test Suite'){
                parallel {
                    stage('Slave Node1'){
                        //agent {
                        //   label "remote_node1"
                        //}
                        step{
                            git url 'https://github.com/dylankleinhentz/NN-Code.git'
                            bat 'npm install'
                            bat 'npm update'
                            bat 'npm run triggerAllTests-headless'
                        }
                    }
                }
        }
        
    }
}