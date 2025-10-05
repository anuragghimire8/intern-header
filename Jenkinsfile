pipeline {
    agent any
    stages {
        stage("Clone code") {
            steps {
                echo "cloning"
                git branch: 'main', credentialsId: 'github', url: 'pipeline {
    agent any
    stages {
        stage("Clone code") {
            steps {
                echo "cloning"
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/anuragghimire8/intern-header.git'
            }
        }
        stage("Build Image") {
            steps {
                echo "Building"
                sh "docker build -t header ."
            }
        }
        stage("Push Image to repoistory") {
            steps {
                echo "Pushing Image"
                withCredentials([usernamePassword(credentialsId:"dockerhub",passwordVariable:"password",usernameVariable:"user")]){ 
                sh "docker tag header ${env.user}/header:latest"
                sh "docker login -u ${env.user} -p ${env.password}"
                sh "docker push ${env.user}/header:latest"
                }
            }
        }
        stage("build and deploy") {
            steps {
                echo "building and deploying"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}


            
        
        stage("Build Image") {
            steps {
                echo "Building"
                sh "docker build -t cv-web ."
            }
        }
        stage("Push Image to repoistory") {
            steps {
                echo "Pushing Image"
                withCredentials([usernamePassword(credentialsId:"dockerhub",passwordVariable:"password",usernameVariable:"user")]){ 
                sh "docker tag cv-web ${env.user}/cv-web-app:latest"
                sh "docker login -u ${env.user} -p ${env.password}"
                sh "docker push ${env.user}/cv-web-app:latest"
                }
            }
        }
        stage("build and deploy") {
            steps {
                echo "building and deploying"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    


