# Recruit

date | company | role
--- | --- | ---
2021-10 / today | [Recruit](https://www.recruit.co.jp/) | SRE

## Reference

* https://techblog.szksh.cloud/tags/job/
* https://github.com/suzuki-shunsuke/profile#blog

## 2021-11

* AWS Control Tower
  * Enroll some AWS Accounts to AWS Control Tower
* AWS SSO
  * Encourage developers to migrate AWS IAM User to AWS SSO
  * Fix the local development to work without AWS IAM User's Access Key
  * Account Cleaning: Remove unneeded IAM Users
  * Write document for developers and SRE
* [Self Hosted Renovate in GitHub Actions](https://github.com/renovatebot/github-action)
  * Set up Self Hosted Renovate
* [Transferring a domain to a different AWS account](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-between-aws-accounts.html)
* CI/CD of AWS Lambda
* Migrate [git-secrets](https://github.com/awslabs/git-secrets) to [secretlint](https://github.com/secretlint/secretlint)

## 2021-10

* Introduce AWS SSO
  * Configure AWS SSO and Google Workspace
  * Manage AWS SSO with Terraform
  * Fork [awslabs/ssosync](https://github.com/awslabs/ssosync) and run it periodically with AWS Lambda
  * Verify if some tools such as terraform and kubectl work with AWS SSO
    * Fix the in-house wrapper tool of `aws eks update-kubeconfig`
  * Write the migration guide for developer and support the migration
* Extract AWS WAF's COUNT and BLOCK log with Lambda and Kinesis Firehose
* Replace [akoi](http://github.com/suzuki-shunsuke/akoi) to [aqua](https://aquaproj.github.io/)
