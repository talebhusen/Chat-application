terraform {
  backend "s3" {
    bucket         = "chat-app-s3-bucket-for-state-management"
    key            = "ec2-instance/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform_locks"
    encrypt        = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=6.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}