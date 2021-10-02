# What I did in Quipper

## Reference

* https://techblog.szksh.cloud/tags/job/
* https://github.com/suzuki-shunsuke/profile#blog

## 2021-09

* Investigate AWS SSO, AWS Organizations, and AWS Control Tower
* Spoke about Terraform for 30 minutes on [HashiTalks Japan 2021](https://events.hashicorp.com/hashitalksjapan)
  * slide: [Terraform Platform in Quipper](https://speakerdeck.com/szksh/terraform-platform-in-quipper)

## 2021-08

* Replace git-secrets to secretlint
* Terraform
  * Split Terraform States per service and environment
  * Migrate Terraform Modules from the Terraform Monorepo to other repositories
  * Format codes by `terraform fmt` in CI automatically
* Investigate AWS SSO, AWS Organizations, and AWS Control Tower
* Develop GitHub App for AWS CodeBuild
* Develop AWS Lambda Function to extract counted and blocked AWS WAF Logs
* Develop AWS Lambda Function to retry AWS CodeBuild builds which failed due to the CodeBuild's Provisioning Error

## 2021-07

* Migrate Docker images from Docker Hub to Amazon ECR
* Terraform
  * Update .terraform.lock.hcl in CI automatically
  * Introduce tfmigrate in CI/CD
  * Migrate Terraform Modules from the Terraform Monorepo to other repositories
  * Replace roadworker to Terraform
  * Refactor codes with tfmigrate

## 2021-06

* Replace miam to Terraform
* Migrate Docker images from Docker Hub to Amazon ECR

## 2021-05

* On-boarding of new SRE member
* Set up CI/CD to manage GCP with Terraform
  * Support developers
  * Investigate GCP's Workload Identity Federation
  * Investigate how to manage GCP IAM with Terraform
* Upgrade Terraform to v0.15.4
* Investigate the migration from miam to Terraform

## 2021-04

* On-boarding of new SRE member
* Develop the Monorepo for AWS Lambda
  * Investigate Canary Release and Dark Launch
* Automate to send IAM User's initial password via Slack with AWS Lambda
* Update Terraform by Renovate
* Investigate to manage GCP with Terraform
* Conftest
  * Format Rego files with `opa fmt` and check if codes are formatted in CI
  * Introduce Policy Testing

## 2021-03

* Terraform
  * Write document about CI/CD and local development
* Application repository (Monorepo)
  * Configure branch filters of CircleCI
* Develop the Monorepo for AWS Lambda
  * To make easy to deploy Lambda Functions
  * Terraform, AWS CodeBuild, lambroll
* Upgrade MongoDB
* Prepare for On-boarding of our SRE team

## 2021-02

* Unify Terraform Repositories
* Upgrade Terraform from v0.13 to v0.14
  * https://quipper.hatenablog.com/entry/2021/03/12/080000
* Application repository (Monorepo)
  * Split deploy jobs per service
* Improve Renovate Configuration

## 2021-01

* Hide outdated Pull Request comments with github-comment and tfcmt
* Terraform
  * Replace tfnotify to tfcmt

## 2020-12

* Develop AWS SAM Application
* Add links to Pull Requests created by Renovate
  * https://techblog.szksh.cloud/renovate-add-compare/
* Terraform
  * Improve the local development with Docker Compose
  * Refactoring
    * Remove unused code, variables, and secrets
  * Introduce tflint
  * Store plan files on S3 to apply safely
* Improve Renovate Configuration
  * Stop assigning reviewers in case of automerge
* Fix k8s manifests according to kube-linter
* Warn by the pull request comment when some resources would be removed by miam

## 2020-11

* Develop and introduce [github-ci-monitor](https://github.com/suzuki-shunsuke/github-ci-monitor)
  * https://techblog.szksh.cloud/github-ci-monitor/
* Terraform
  * Upgrade Terraform Providers with Renovate
  * Upgrade Terraform from v0.12 to v0.13
  * Introduce tfsec
  * Investigate tfmigrate
* Application repository (Monorepo)
  * Improve CI/CD
  * Split .circleci/config.yml
    * https://quipper.hatenablog.com/entry/2020/12/01/080000
    * https://dev.to/suzukishunsuke/splitting-circleci-config-yml-10gk
* Introduce kube-linter
* Renovate
  * Split Pull Requests by additionalBranchPrefix

## 2020-10

* Terraform
  * Migrate CI/CD from CircleCI to AWS CodeBuild
  * Test `aws_cloudwatch_log_group.retention_in_days` with Conftest
* Authenticate Docker Hub to prevent Rate Limit exceeded
  * https://quipper.hatenablog.com/entry/2020/11/02/080000
* Make easy to understand the failure of `kustomize build` by Pull Request Comments
* Run `kubectl apply --server-dry-run` in CI for test
* Renovate
  * Introduce `automerge`
  * Validate Renovate Configuration with renovate-config-validator in CI

## 2020-07-01 ~ 2020-09-30

* Terraform
  * Migrate CI/CD from CircleCI to AWS CodeBuild
    * For Security and Developer Experience
  * Introduce tfnotify
* Introduce Renovate
* Application repository (Monorepo)
  * Improve CI/CD
* Improve the alert handling from Datadog

## 2020-04-01 ~ 2020-06-30

* Application repository (Monorepo)
  * Post the diff of `kustomize build` to Pull Request comments
  * Validate k8s manifests with Conftest
  * Refactor Go codes for CI/CD
  * Reduce CI/CD execution time
  * Support the development of system for GitOps
* Terraform
  * Refactor codes by replacing input variables to local values
* Introduce GuardDuty
  * Manage by Terraform
* Investigate Argo Workflows
* Support the migration from MongoDB Cloud Manager to MongoDB Atlas
  * Develop the database restore job with Go

## 2020-01-01 ~ 2020-03-31

* Application repository (Monorepo)
  * Rewrite shell scripts for CI/CD with Go
    * https://quipper.hatenablog.com/entry/2020/04/06/080000
  * Reduce CI/CD time using CircleCI Cache
* Upgrade Ubuntu from 14.04 to 18.04
* Upgrade MongoDB
* Ansible
  * Refactor codes according to [the best practice - Use Native YAML Syntax](https://www.ansible.com/blog/ansible-best-practices-essentials)
  * Refactor CircleCI Configuration using parameters and commands
* Terraform
  * Introduce shfmt and shellcheck
  * Introduce State Locking
  * Investigate Terraform Cloud
    * Finally, we decide not to use Terraform Cloud
* Investigate Jenkins Alternative
  * Rundeck
  * Argo Workflows


## 2019-10-01 ~ 2019-12-31

* Terraform
  * Upgrade Terraform from v0.11 to v0.12
  * Introduce formatters and linters in CI
    * terraform fmt, terraform validate
  * Split Terraform State per service and environment
  * Change the release flow to GitHub Flow
* Ansible
  * Reduce CI/CD execution time (CircleCI)
  * Improve local development experience
* Application repository (Monorepo)
  * Reduce CI/CD time using CircleCI Cache
