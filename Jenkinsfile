pipeline {
    agent any

    stages {
        stage("Clone code") {
            steps {
                echo "Cloning repo..."
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/anuragghimire8/intern-header.git'
            }
        }

        stage("Build header image") {
            steps {
                echo "Building header image..."
                sh "docker build -t header ."
            }
        }

        stage("Push header image") {
            steps {
                echo "Pushing header image..."
                withCredentials([usernamePassword(credentialsId:"dockerhub", passwordVariable:"password", usernameVariable:"user")]) { 
                    sh "docker tag header ${env.user}/header:latest"
                    sh "docker login -u ${env.user} -p ${env.password}"
                    sh "docker push ${env.user}/header:latest"
                }
            }
        }

       

        stage("Deploy with docker-compose") {
            steps {
                echo "Deploying services with docker-compose..."
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}

