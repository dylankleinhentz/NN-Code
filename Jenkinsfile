pipeline {
    agent any

    tools {nodejs "node"}

    stage {
        stage('Cypress Parallel Test Suite'){
                parallel {
                    stage('Slave Node1'){
                        //agent {
                        //   label "remote_node1"
                        //}
                        steps {
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