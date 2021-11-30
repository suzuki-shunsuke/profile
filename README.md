# Self introduction

[![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/profile.svg)](https://github.com/suzuki-shunsuke/profile)

Self introduction of [suzuki-shunsuke](https://github.com/suzuki-shunsuke)

DevOps / Go / Tool maker / OSS contributor

* [How to create README](#how-to-create-readme)
* [Blog](#blog)
* [Job Career](career)
* [Collaboration](#collaboration)
* [Contribution (Pull Request)](#contribution-pull-request)
* [My tools](#my-tools)
  * [CircleCI Orbs](#circleci-orbs)
  * [Ansible Roles](#ansible-roles)
  * [Ansible Modules](#ansible-modules)

## How to create README

I create and update README manually without any tools.

## Presentation

date | event | style | presentation title
--- | --- | --- | ---
2021-09-30 | [HashiTalks Japan 2021](https://events.hashicorp.com/hashitalksjapan) ([youtube](https://www.youtube.com/watch?v=Cl9S-uzkuLc)) | Talk (30 min) | [Terraform Platform in Quipper](https://speakerdeck.com/szksh/terraform-platform-in-quipper) ([youtube](https://www.youtube.com/watch?v=KpYwcwxnzbY))
2021-07-07 | [Open Policy Agent Rego Knowledge Sharing Meetup](https://mercari.connpass.com/event/211073/) ([youtube](https://youtu.be/0YpJhrz6L0A)) | LT (5min) | [Quipper における Rego の活用事例](https://gist.github.com/suzuki-shunsuke/9372337aa62a6f8394bb136582ec068e) ([youtube](https://youtu.be/0YpJhrz6L0A?t=870))

## Blog

Note that blog is mainly written in Japanese.

* https://techblog.szksh.cloud
* https://dev.to/suzukishunsuke

date | title
--- | ---
2021-10-13 | [HashiTalks Japan 2021 で弊プロダクトの Terraform Platform について登壇しました](https://blog.studysapuri.jp/entry/2021/10/13/080000)
2021-08-11 | [Terraform の CI に tfmigrate を導入した話](https://blog.studysapuri.jp/entry/2021/08/11/080000)
2021-08-02 | [AWS IAM の管理を miam から Terraform に移行した話](https://blog.studysapuri.jp/entry/2021/08/02/080000)
2021-06-08 | [AWS - GCP の ID 連携を使い、 AWS CodeBuild で Terraform を使って GCP を管理](https://blog.studysapuri.jp/entry/2021/06/08/080000)
2021-05-25 | [AWS IAM User の初期パスワード通知を自動化](https://blog.studysapuri.jp/entry/2021/05/25/080000)
2021-04-01 | [Terraform リポジトリをマージして CI/CD を改善した話](https://blog.studysapuri.jp/entry/2021/04/01/080000)
2021-03-12 | [100 以上の Terraform 環境をいい感じに v0.14 に upgrade した方法](https://blog.studysapuri.jp/entry/2021/03/12/080000)
2021-03-10 | [Pull Request の terraform plan の実行結果を S3 に保存して安全に apply](https://blog.studysapuri.jp/entry/2021/03/10/080000)
2020-12-10 | [Renovate の Tips](https://blog.studysapuri.jp/entry/2020/12/10/080000)
2020-12-03 | [Terraform の CI/CD を CodeBuild に移行した話](https://blog.studysapuri.jp/entry/2020/12/03/080000)
2020-12-01 | [巨大な .circleci/config.yml を分割した話](https://blog.studysapuri.jp/entry/2020/12/01/080000)
2020-11-02 | [Docker Hub の Rate Limit 問題に対応した話](https://blog.studysapuri.jp/entry/2020/11/02/080000)
2020-04-06 | [CI の修正をリリース前に本番と同じ条件下で検証出来る仕組みを構築した話](https://blog.studysapuri.jp/entry/2020/04/06/080000)
2018-12-08 | [Go製OSS CI/CDプラットフォーム drone 1.0.0-rc.1 の新機能・変更点](https://engineering.linecorp.com/ja/blog/go-oss-ci-cd-platform-drone-1-0-0-rc-1/)
2018-08-10 | [grpcでバラバラなslack botが1つになる](https://engineering.linecorp.com/ja/blog/detail/345)
2017-12-05 | [Jenkinsに代わるGo製OSS CIツールDrone](https://engineering.linecorp.com/ja/blog/detail/218)

## Collaboration

date | repository
--- | ---
2020-11-29 / now | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker)
2018-07-12 / 2019-06-25 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go)

## Contribution (Pull Request)

[merged](https://github.com/pulls?q=is%3Apr+author%3Asuzuki-shunsuke+-user%3Asuzuki-shunsuke+is%3Apublic+is%3Amerged)
[open](https://github.com/pulls?q=is%3Apr+author%3Asuzuki-shunsuke+-user%3Asuzuki-shunsuke+is%3Apublic+is%3Aopen)
[rejected](https://github.com/pulls?q=is%3Apr+author%3Asuzuki-shunsuke+-user%3Asuzuki-shunsuke+is%3Apublic+is%3Aunmerged+is%3Aclosed)

merged date | repository | lang | PR's short description
--- | --- | --- | ---
2021-11-30 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [fix: add nil check of DriverConfig](https://github.com/kreuzwerker/terraform-provider-docker/pull/315)
2021-11-30 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [fix(container): remove log_driver's default value and make log_driver `computed`](https://github.com/kreuzwerker/terraform-provider-docker/pull/270)
2021-11-13 | [shuaibiyy/awesome-terraform](https://github.com/shuaibiyy/awesome-terraform) | document | [Add tfmigrator](https://github.com/shuaibiyy/awesome-terraform/pull/139)
2021-11-13 | [shuaibiyy/awesome-terraform](https://github.com/shuaibiyy/awesome-terraform) | document | [Add tfcmt](https://github.com/shuaibiyy/awesome-terraform/pull/138)
2021-10-20 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | Makefile | [fix: fix make testacc](https://github.com/hashicorp/terraform-provider-aws/pull/21385)
2021-08-23 | [renovatebot/github-action](https://github.com/renovatebot/github-action) | document | [docs: fix broken links and update GitHub Actions](https://github.com/renovatebot/github-action/pull/556)
2021-08-23 | [renovatebot/github-action](https://github.com/renovatebot/github-action) | json (Renovate Configuration) | [chore: update GitHub Actions in README by Renovate](https://github.com/renovatebot/github-action/pull/557)
2021-07-23 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go | [feat: add aws_appconfig_deployment](https://github.com/hashicorp/terraform-provider-aws/pull/20172)
2021-07-14 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go | [fix: add the attribute "environment_id" to aws_appconfig_environment](https://github.com/hashicorp/terraform-provider-aws/pull/20176)
2021-07-13 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go | [feat: support AppConfig Deployment Strategy](https://github.com/hashicorp/terraform-provider-aws/pull/19359)
2021-07-12 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go | [feat: support AppConfig Hosted Configuration Version](https://github.com/hashicorp/terraform-provider-aws/pull/19324)
2021-07-12 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go | [feat: add appconfig_configuration_profile](https://github.com/hashicorp/terraform-provider-aws/pull/19320)
2021-07-12 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go | [feat: add aws_appconfig_application and aws_appconfig_environment](https://github.com/hashicorp/terraform-provider-aws/pull/19307)
2021-04-21 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [fix: assign map to rawState when it is nil to prevent panic](https://github.com/kreuzwerker/terraform-provider-docker/pull/180)
2021-04-07 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go (Renovate) | [chore(renovate): update dependencies automatically by Renovate](https://github.com/kreuzwerker/terraform-provider-docker/pull/162)
2021-04-01 | [tfsec/tfsec](https://github.com/tfsec/tfsec) | go (shell script) | [Fix publish-docs to update document](https://github.com/tfsec/tfsec/pull/675)
2021-03-29 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [fix: search local images with Docker image ID](https://github.com/kreuzwerker/terraform-provider-docker/pull/151)
2021-03-29 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [fix: set "ForceNew: true" to labelSchema](https://github.com/kreuzwerker/terraform-provider-docker/pull/152)
2021-03-29 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [chore: configure actions/stale](https://github.com/kreuzwerker/terraform-provider-docker/pull/157)
2021-03-29 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go (document) | [docs: format Guide of Bug report for readability](https://github.com/kreuzwerker/terraform-provider-docker/pull/159)
2021-03-29 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go (document) | [docs: add an example to build an image with docker_image](https://github.com/kreuzwerker/terraform-provider-docker/pull/158)
2021-03-25 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go (document) | [docs: add a guide about writing issues to CONTRIBUTING.md](https://github.com/kreuzwerker/terraform-provider-docker/pull/149)
2021-03-18 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [ci: run acceptance tests with multiple Terraform versions](https://github.com/kreuzwerker/terraform-provider-docker/pull/129)
2021-03-12 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go (document) | [chore: add the guide about Terraform Configuration in Bug Report](https://github.com/kreuzwerker/terraform-provider-docker/pull/139)
2021-02-26 | [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) | go (document) | [docs: add description `Forces new resource` to rds_cluster_instance](https://github.com/hashicorp/terraform-provider-aws/pull/17059)
2021-02-01 | [chaspy/github-issue-prometheus-exporter](https://github.com/chaspy/github-issue-prometheus-exporter) | go | [feat: validate parameters before loop](https://github.com/chaspy/github-issue-prometheus-exporter/pull/8)
2021-01-31 | [chaspy/github-issue-prometheus-exporter](https://github.com/chaspy/github-issue-prometheus-exporter) | go | [chore(go-github): update go-github to v33](https://github.com/chaspy/github-issue-prometheus-exporter/pull/6)
2021-01-31 | [chaspy/github-pr-prometheus-exporter](https://github.com/chaspy/github-pr-prometheus-exporter) | go | [docs: fix typo](https://github.com/chaspy/github-pr-prometheus-exporter/pull/11)
2021-01-31 | [chaspy/github-pr-prometheus-exporter](https://github.com/chaspy/github-pr-prometheus-exporter) | go | [chore(go-github): use go-github v33](https://github.com/chaspy/github-pr-prometheus-exporter/pull/10)
2021-01-30 | [GoogleCloudPlatform/terraformer](https://github.com/GoogleCloudPlatform/terraformer) | go | [style: fix typo](https://github.com/GoogleCloudPlatform/terraformer/pull/770)
2021-01-28 | [chaspy/github-pr-prometheus-exporter](https://github.com/chaspy/github-pr-prometheus-exporter) | go | [refactor: use go-github getter methods](https://github.com/chaspy/github-pr-prometheus-exporter/pull/9)
2021-01-27 | [chaspy/github-pr-prometheus-exporter](https://github.com/chaspy/github-pr-prometheus-exporter) | go | [perf: specify the size of slice when the slice is created](https://github.com/chaspy/github-pr-prometheus-exporter/pull/6)
2021-01-27 | [chaspy/github-pr-prometheus-exporter](https://github.com/chaspy/github-pr-prometheus-exporter) | go (Dockerfile) | [Run Docker container as non root user for security](https://github.com/chaspy/github-pr-prometheus-exporter/pull/5)
2021-01-20 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [docs: fix legacy configuration style](https://github.com/kreuzwerker/terraform-provider-docker/pull/126)
2021-01-12 | [roboll/helmfile](https://github.com/roboll/helmfile) | go (document) | [docs: fix typo](https://github.com/roboll/helmfile/pull/1645)
2021-01-09 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [feat: support Docker plugin](https://github.com/kreuzwerker/terraform-provider-docker/pull/35)
2021-01-07 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [fix: set "latest" tag when tag isn't specified](https://github.com/kreuzwerker/terraform-provider-docker/pull/117)
2021-01-03 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [feat: support max replicas of Docker Service Task Spec](https://github.com/kreuzwerker/terraform-provider-docker/pull/112)
2020-12-30 | [renovatebot/renovate](https://github.com/renovatebot/renovate) | typescript | [feat: support template in labels](https://github.com/renovatebot/renovate/pull/8138)
2020-12-30 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [docs: add labels to arguments of docker_service](https://github.com/kreuzwerker/terraform-provider-docker/pull/105)
2020-12-29 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [feat: add force_remove option to r/image](https://github.com/kreuzwerker/terraform-provider-docker/pull/104)
2020-12-20 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [introduce golangci-lint](https://github.com/kreuzwerker/terraform-provider-docker/pull/32)
2020-12-12 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [style: format with gofumpt](https://github.com/kreuzwerker/terraform-provider-docker/pull/11)
2020-12-12 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [ci: fix website ci](https://github.com/kreuzwerker/terraform-provider-docker/pull/26)
2020-12-12 | [slack-go/slack](https://github.com/slack-go/slack) | go | [remove .gometalinter.json](https://github.com/slack-go/slack/pull/869)
2020-09-03 | [terraform-providers/terraform-provider-aws](https://github.com/terraform-providers/terraform-provider-aws) | go | [Add GuardDuty filter resource](https://github.com/terraform-providers/terraform-provider-aws/pull/14876)
2020-08-03 | [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) | go | [Set `Computed: true` and separate files of resourceDockerContainerV1](https://github.com/terraform-providers/terraform-provider-docker/pull/272)
2020-08-03 | [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) | go | [Fix panic to migrate schema of docker_container from v1 to v2](https://github.com/terraform-providers/terraform-provider-docker/pull/271)
2020-07-21 | [hashicorp/terraform](https://github.com/hashicorp/terraform) | go (document) | [docs: fix the output format of state show command](https://github.com/hashicorp/terraform/pull/25615)
2020-06-14 | [jmoiron/sqlx](https://github.com/jmoiron/sqlx) | go | [Replace bindArgs to bindAnyArgs to support map](https://github.com/jmoiron/sqlx/pull/616)
2020-06-12 | [avelino/awesome-go](https://github.com/avelino/awesome-go) | go (document) | [Remove not found tools and fix a link](https://github.com/avelino/awesome-go/pull/3112)
2020-06-06 | [argoproj/gitops-engine](https://github.com/argoproj/gitops-engine) | go | [fix: Lock to write MockKubectlCmd.LastValidate to fix the race condition](https://github.com/argoproj/gitops-engine/pull/52)
2020-06-06 | [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) | go | [Prevent force recreate of container about some attributes](https://github.com/terraform-providers/terraform-provider-docker/pull/269)
2020-05-28 | [mongodb/go-client-mongodb-atlas](https://github.com/mongodb/go-client-mongodb-atlas) | go | [feat: support the pagination at CloudProviderSnapshotRestoreJobsService.List](https://github.com/mongodb/go-client-mongodb-atlas/pull/97)
2020-05-28 | [mongodb/go-client-mongodb-atlas](https://github.com/mongodb/go-client-mongodb-atlas) | go | [feat: support the pagination at GetAllCloudProviderSnapshots](https://github.com/mongodb/go-client-mongodb-atlas/pull/96)
2020-05-27 | [mongodb/go-client-mongodb-atlas](https://github.com/mongodb/go-client-mongodb-atlas) | go | [feat: support the pagination of WhitelistAPIKeysService.List](https://github.com/mongodb/go-client-mongodb-atlas/pull/98)
2020-03-22 | [guitarrapc/git-shallow-clone-orb](https://github.com/guitarrapc/git-shallow-clone-orb) | CircleCI Orb | [fix: Fix the example of the parameter `clone_options`](https://github.com/guitarrapc/git-shallow-clone-orb/pull/11)
2020-03-21 | [guitarrapc/git-shallow-clone-orb](https://github.com/guitarrapc/git-shallow-clone-orb) | CircleCI Orb | [feat: add a parameter "clone_options"](https://github.com/guitarrapc/git-shallow-clone-orb/pull/10)
2020-03-08 | [guitarrapc/git-shallow-clone-orb](https://github.com/guitarrapc/git-shallow-clone-orb) | CircleCI Orb | [feat: Add an option "path" same as the built in step "checkout"](https://github.com/guitarrapc/git-shallow-clone-orb/pull/6)
2020-02-13 | [argoproj/argo-site](https://github.com/argoproj/argo-site) | document | [fix: Fix the path to Getting started](https://github.com/argoproj/argo-site/pull/18)
2020-02-04 | [avelino/awesome-go](https://github.com/avelino/awesome-go) | go (document) | [Remove tools which are not found](https://github.com/avelino/awesome-go/pull/2938)
2020-02-02 | [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) | go | [Support to update docker_container](https://github.com/terraform-providers/terraform-provider-docker/pull/236)
2020-02-02 | [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) | go | [support to import some docker_container's attributes](https://github.com/terraform-providers/terraform-provider-docker/pull/234)
2020-02-01 | [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) | go | [Fix a flaky test](https://github.com/terraform-providers/terraform-provider-docker/pull/238)
2020-01-03 | [docker-slim/docker-slim](https://github.com/docker-slim/docker-slim) | go | [Fix a compile error: Sprintf format %s has arg pnum of wrong type uint16](https://github.com/docker-slim/docker-slim/pull/122)
2019-11-27 | [yuya-takeyama/circle-dd-bench](https://github.com/yuya-takeyama/circle-dd-bench) | go | [Use Go module and upgrade Alpine and Golang and remove the vendor directory](https://github.com/yuya-takeyama/circle-dd-bench/pull/4)
2019-11-02 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Fix typo](https://github.com/nlopes/slack/pull/590)
2019-11-02 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Add fields to CtxChannel to get search API's response](https://github.com/nlopes/slack/pull/589)
2019-08-19 | [dim0627/hugo_theme_beg](https://github.com/dim0627/hugo_theme_beg) | toml | [Fix min_version](https://github.com/dim0627/hugo_theme_beg/pull/23)
2019-08-15 | [drone/drone-cli](https://github.com/drone/drone-cli) | go | [Fix typo](https://github.com/drone/drone-cli/pull/145)
2019-08-09 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Add the field `Private` to Share](https://github.com/nlopes/slack/pull/561)
2019-07-24 | [drone/drone-migrate](https://github.com/drone/drone-migrate) | go | [limit repoActivateQuery only to originally activa repositories](https://github.com/drone/drone-migrate/pull/16)
2019-07-11 | [drone/drone-migrate](https://github.com/drone/drone-migrate) | go | [Fix API token from the GitHub access token to Drone API token](https://github.com/drone/drone-migrate/pull/15)
2019-06-07 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [Fix a dead link to CONTRIBUTING.md in README](https://github.com/line/line-bot-sdk-go/pull/161)
2019-04-08 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [Use Codecov](https://github.com/line/line-bot-sdk-go/pull/142)
2019-01-07 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Refactor with linters and use gometalinter at CI](https://github.com/nlopes/slack/pull/461)
2018-12-06 | [drone/drone-jsonnet-config](https://github.com/drone/drone-jsonnet-config) | go | [use .drone.yml if repo.Config is not jsonnet file](https://github.com/drone/drone-jsonnet-config/pull/1)
2018-11-13 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [ci: stop support of Go 1.7 and 1.8](https://github.com/line/line-bot-sdk-go/pull/111)
2018-09-15 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Build fails: conversation.go undefined: post](https://github.com/nlopes/slack/pull/401)
2018-09-13 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Support the thread_ts parameter of files.upload API](https://github.com/nlopes/slack/pull/398)
2018-08-30 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [Lint](https://github.com/line/line-bot-sdk-go/pull/105)
2018-08-29 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [Fix the version of linebot/version.go and add a shell script to prevent to forget update of linebot/version.go](https://github.com/line/line-bot-sdk-go/pull/103)
2018-08-12 | [gojuno/minimock](https://github.com/gojuno/minimock) | go | <ul><li>[Reset mockExpectations at Set method so that FormatFunc is called](https://github.com/gojuno/minimock/pull/12)</li><li>[Fix mockExpectations undefined error when argument is nothing](https://github.com/gojuno/minimock/pull/13)</li></ul>
2018-07-17 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [Support issue link token api](https://github.com/line/line-bot-sdk-go/pull/94)
2018-07-13 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go (document) | [Add status badges and a link to LICENSE.txt in README](https://github.com/line/line-bot-sdk-go/pull/92)
2018-07-12 | [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | go | [Add AccountLink event](https://github.com/line/line-bot-sdk-go/pull/91)
2018-06-06 | [brianshumate/ansible-consul](https://github.com/brianshumate/ansible-consul) | ansible role (python) | [Fix consul_configd_path's default value at README](https://github.com/brianshumate/ansible-consul/pull/168)
2018-05-25 | [ansible/ansible](https://github.com/ansible/ansible) | python | [Add 'init' option to docker_container module to support docker's `--init` option](https://github.com/ansible/ansible/pull/34547)
2018-05-07 | [brianshumate/ansible-consul](https://github.com/brianshumate/ansible-consul) | ansible role (python) | [Assert if consul_group_name isn't included in groups](https://github.com/brianshumate/ansible-consul/pull/166)
2018-05-07 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Refactor with some tools](https://github.com/nlopes/slack/pull/306)
2018-05-06 | [grpc/grpc.github.io](https://github.com/grpc/grpc.github.io) | document | [docs: fix a broken link](https://github.com/grpc/grpc.github.io/pull/660)
2018-05-05 | [nlopes/slack](https://github.com/nlopes/slack) | go | [feat: add user profile fields](https://github.com/nlopes/slack/pull/305)
2018-05-02 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Revert "Add custom user profile field to UserProfile"](https://github.com/nlopes/slack/pull/304)
2018-04-20 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Support users.profile.get API](https://github.com/nlopes/slack/pull/298)
2018-02-21 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Fix bug of UploadFile (duplicate SLACK_API)](https://github.com/nlopes/slack/pull/266)
2018-02-21 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Add fields EnterpriseID and EnterpriseName to SlashCommand](https://github.com/nlopes/slack/pull/265)
2018-02-02 | [nlopes/slack](https://github.com/nlopes/slack) | go | [Support some conversation API (2)](https://github.com/nlopes/slack/pull/252)
2018-01-31 | [drone/docs](https://github.com/drone/docs) | document (go) | <ul><li>[Update User Create API documentation](https://github.com/drone/docs/pull/281)</li><li>[Update Secrets API Documentation](https://github.com/drone/docs/pull/292)</li><li>[Update Registry API Documentation](https://github.com/drone/docs/pull/294)</li><li>[Update Repository API](https://github.com/drone/docs/pull/293)</li><li>[Update Build API Documentation](https://github.com/drone/docs/pull/295)</li></ul>
2018-01-29 | [drone/docs](https://github.com/drone/docs) | document (go) | [Update Users documentation](https://github.com/drone/docs/pull/291)
2018-01-28 | [drone/docs](https://github.com/drone/docs) | document (go) | <ul><li>[Update User Update API documentation](https://github.com/drone/docs/pull/282)</li><li>[Copy the API Overview documentation from readme.drone.io](https://github.com/drone/docs/pull/280)</li></ul>
2018-01-19 | [nlopes/slack](https://github.com/nlopes/slack) | go | <ul><li>[Support some conversation API](https://github.com/nlopes/slack/pull/249)</li><li>[Support users.lookupByEmail API](https://github.com/nlopes/slack/pull/247)</li></ul>
2018-01-08 | [yeoman/environment](https://github.com/yeoman/environment) | node | [Allow to change the log's 'colors' parameter](https://github.com/yeoman/environment/pull/93)
2017-11-12 | [AlecAivazis/survey](https://github.com/AlecAivazis/survey) | go | [Allow to change the editor behavior](https://github.com/AlecAivazis/survey/pull/110)

## My tools

first release date | name | badges | lang | type | short description
--- | --- | --- | --- | --- | ---
2021-09-05 | [aqua-renovate-config](https://github.com/suzuki-shunsuke/aqua-renovate-config) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/aqua-renovate-config.svg)](https://github.com/suzuki-shunsuke/aqua-renovate-config) | JSON | Renovate Preset | [Renovate Configuration](https://docs.renovatebot.com/config-presets/) to update packages and registries of [aqua](https://github.com/suzuki-shunsuke/aqua)
2021-09-04 | [aqua-registry](https://github.com/suzuki-shunsuke/aqua-registry) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/aqua-registry.svg)](https://github.com/suzuki-shunsuke/aqua-registry) | yaml | configuration | [aqua](https://github.com/suzuki-shunsuke/aqua)'s Standard Registry
2021-08-30 | [logrus-error](https://github.com/suzuki-shunsuke/logrus-error) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/logrus-error.svg)](https://github.com/suzuki-shunsuke/logrus-error) | go | library | Embed [logrus](https://github.com/sirupsen/logrus).Fields into error
2021-08-29 | [aqua](https://github.com/suzuki-shunsuke/aqua) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/aqua.svg)](https://github.com/suzuki-shunsuke/aqua) | go | cli | Version manager of CLI
2021-08-29 | [aqua-proxy](https://github.com/suzuki-shunsuke/aqua-proxy) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/aqua-proxy.svg)](https://github.com/suzuki-shunsuke/aqua-proxy) | go | cli | The internal CLI tool of [aqua](https://github.com/suzuki-shunsuke/aqua)
2021-08-29 | [aqua-installer](https://github.com/suzuki-shunsuke/aqua-installer) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/aqua-installer.svg)](https://github.com/suzuki-shunsuke/aqua-installer) | shell script | script, GitHub Actions | Install [aqua](https://github.com/suzuki-shunsuke/aqua) quickly
2021-08-24 | [go-checkout-github-merged-commit](https://github.com/suzuki-shunsuke/go-checkout-github-merged-commit) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-checkout-github-merged-commit.svg)](https://github.com/suzuki-shunsuke/go-checkout-github-merged-commit) | go | library | Checkout the GitHub Pull Request merged commit
2021-07-31 | [renovate-github-tags-datasource-repositories](https://github.com/suzuki-shunsuke/renovate-github-tags-datasource-repositories) |  | | | Renovate github-tags Datasource Repositories
2021-07-18 | [tfmigrator/cli](https://github.com/tfmigrator/cli) | [![GitHub last commit](https://img.shields.io/github/last-commit/tfmigrator/cli.svg)](https://github.com/tfmigrator/cli) | go | cli | CLI to Migrate Terraform Configuration and State with terraform state command and hcledit
2021-07-18 | [expr-unmarshaler](https://github.com/suzuki-shunsuke/expr-unmarshaler) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/expr-unmarshaler.svg)](https://github.com/suzuki-shunsuke/expr-unmarshaler) | go | library |
2021-06-06 | [tfmigrator/tfmigrator](https://github.com/tfmigrator/tfmigrator) | [![GitHub last commit](https://img.shields.io/github/last-commit/tfmigrator/tfmigrator.svg)](https://github.com/tfmigrator/tfmigrator) | go | library | Migrate Terraform Configuration and State with terraform state command and hcledit
2021-05-27 | [go-template-unmarshaler](https://github.com/suzuki-shunsuke/go-template-unmarshaler) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-template-unmarshaler.svg)](https://github.com/suzuki-shunsuke/go-template-unmarshaler) | go | library |
2021-05-09 | [lambuild](https://github.com/suzuki-shunsuke/lambuild) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/lambuild.svg)](https://github.com/suzuki-shunsuke/lambuild) | go | Lambda | Empower AWS CodeBuild whose source provider is GITHUB. Provide great features like multiple buildspec supports, conditional builds and commands, etc
2021-04-25 | [akoi-installer](https://github.com/suzuki-shunsuke/akoi-installer) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/akoi-installer.svg)](https://github.com/suzuki-shunsuke/akoi-installer) | TypeScript | GitHub Actions | GitHub Actions and Shell Script to install [akoi](https://github.com/suzuki-shunsuke/akoi)
2021-04-21 | [aws-iam-cred-sender](https://github.com/suzuki-shunsuke/aws-iam-cred-sender) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/aws-iam-cred-sender.svg)](https://github.com/suzuki-shunsuke/aws-iam-cred-sender) | go | Lambda | AWS Lambda Function to send an initial password to a new user via Slack DM
2021-03-12 | [github-comment-metadata](https://github.com/suzuki-shunsuke/github-comment-metadata) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/github-comment-metadata.svg)](https://github.com/suzuki-shunsuke/github-comment-metadata) | go | library | Parser of metadata github-comment embeds into comment
2021-01-31 | [tfmigrator](https://github.com/suzuki-shunsuke/tfmigrator) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/tfmigrator.svg)](https://github.com/suzuki-shunsuke/tfmigrator) | go | cli | migrate Terraform configuration and State
2021-01-05 | [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/tfcmt.svg)](https://github.com/suzuki-shunsuke/tfcmt) | go | cli | Fork of [mercari/tfnotify](https://github.com/mercari/tfnotify)
2021-01-01 | [tfnotify](https://github.com/suzuki-shunsuke/tfnotify) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/tfnotify.svg)](https://github.com/suzuki-shunsuke/tfnotify) | go | cli | Fork of [mercari/tfnotify](https://github.com/mercari/tfnotify)
2020-11-03 | [circleci-config-merge](https://github.com/suzuki-shunsuke/circleci-config-merge) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/circleci-config-merge.svg)](https://github.com/suzuki-shunsuke/circleci-config-merge) | go | cli | Generate .circleci/config.yml by merging multiple files
2020-11-01 | [github-ci-monitor](https://github.com/suzuki-shunsuke/github-ci-monitor) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/github-ci-monitor.svg)](https://github.com/suzuki-shunsuke/github-ci-monitor) | go | cli, lambda function | Monitor GitHub repositories CI statues by DataDog
2020-10-26 | [matchfile](https://github.com/suzuki-shunsuke/matchfile) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/matchfile.svg)](https://github.com/suzuki-shunsuke/matchfile) | go | cli | check file paths are matched to the condition
2020-10-25 | [ci-info](https://github.com/suzuki-shunsuke/ci-info) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ci-info.svg)](https://github.com/suzuki-shunsuke/ci-info) | go | cli | get CI related information
2020-10-15 | [go-convmap](https://github.com/suzuki-shunsuke/go-convmap) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-convmap.svg)](https://github.com/suzuki-shunsuke/go-convmap) | go | library | convert map[interface{}]interface{} to map[string]interface{}
2020-10-12 | [tengo-tester](https://github.com/suzuki-shunsuke/tengo-tester) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/tengo-tester.svg)](https://github.com/suzuki-shunsuke/tengo-tester) | go | cli | test tengo scripts
2020-10-02 | [buildflow](https://github.com/suzuki-shunsuke/buildflow) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/buildflow.svg)](https://github.com/suzuki-shunsuke/buildflow) | go | cli | powerful build pipeline
2020-09-19 | [go-findconfig](https://github.com/suzuki-shunsuke/go-findconfig) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-findconfig.svg)](https://github.com/suzuki-shunsuke/go-findconfig) | go | library | find configuration file
2020-08-29 | [go-ci-env](https://github.com/suzuki-shunsuke/go-ci-env) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-ci-env.svg)](https://github.com/suzuki-shunsuke/go-ci-env) | go | library | get CI meta data from the environment variables
2020-07-04 | [clap](https://github.com/suzuki-shunsuke/clap) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/clap.svg)](https://github.com/suzuki-shunsuke/clap) | go | cli | simple installer
2020-06-04 | [go-thread-safe](https://github.com/suzuki-shunsuke/go-thread-safe) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-thread-safe.svg)](https://github.com/suzuki-shunsuke/go-thread-safe) | go | library | thread safe data types
2020-04-29 | [terraform-provider-graylog](https://github.com/terraform-provider-graylog/terraform-provider-graylog) | [![GitHub last commit](https://img.shields.io/github/last-commit/terraform-provider-graylog/terraform-provider-graylog.svg)](https://github.com/terraform-provider-graylog/terraform-provider-graylog) | go | Terraform Provider | Terraform Provider for Graylog
2020-04-13 | [go-httpclient](https://github.com/suzuki-shunsuke/go-httpclient) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-httpclient.svg)](https://github.com/suzuki-shunsuke/go-httpclient) | go | library | simple HTTP client
2020-04-05 | [skaffold-generator](https://github.com/suzuki-shunsuke/skaffold-generator) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/skaffold-generator.svg)](https://github.com/suzuki-shunsuke/skaffold-generator) | go | cli | generate skaffold.yaml to build and deploy only required services
2020-03-20 | [circleci-orb-forbid-rerun](https://github.com/suzuki-shunsuke/circleci-orb-forbid-rerun) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/circleci-orb-forbid-rerun.svg)](https://github.com/suzuki-shunsuke/circleci-orb-forbid-rerun) | CircleCI Orb | CircleCI Orb | forbid rerun builds whose revision isn't latest for the branch
2020-03-18 | [circleci-orb-orb](https://github.com/suzuki-shunsuke/circleci-orb-orb) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/circleci-orb-orb.svg)](https://github.com/suzuki-shunsuke/circleci-orb-orb) | CircleCI Orb | CircleCI Orb | test and publish CircleCI Orb
2020-03-14 | [circleci-orb-terraform](https://github.com/suzuki-shunsuke/circleci-orb-terraform) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/circleci-orb-terraform.svg)](https://github.com/suzuki-shunsuke/circleci-orb-terraform) | CircleCI Orb | CircleCI Orb | lint and test and apply Terraform configuration
2020-03-10 | [circleci-orb-tfenv](https://github.com/suzuki-shunsuke/circleci-orb-tfenv) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/circleci-orb-tfenv.svg)](https://github.com/suzuki-shunsuke/circleci-orb-tfenv) | CircleCI Orb | CircleCI Orb | lint and test and apply Terraform configuration
2020-03-09 | [github-comment](https://github.com/suzuki-shunsuke/github-comment) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/github-comment.svg)](https://github.com/suzuki-shunsuke/github-comment) | go | cli | post a comment to GitHub commit or pull request
2020-02-09 | [go-circleci-v2-openapi-client](https://github.com/suzuki-shunsuke/go-circleci-v2-openapi-client) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-circleci-v2-openapi-client.svg)](https://github.com/suzuki-shunsuke/go-circleci-v2-openapi-client) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-circleci-v2-openapi-client) | go | library | [CircleCI v2 API](https://github.com/CircleCI-Public/api-preview-docs) client generated by [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)
2020-02-03 | [example-drone-kubernetes-runner](https://github.com/suzuki-shunsuke/example-drone-kubernetes-runner) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/example-drone-kubernetes-runner.svg)](https://github.com/suzuki-shunsuke/example-drone-kubernetes-runner) | k8s | document | Running [Drone](https://drone.io/) [Kubernetes Runner](https://docs.drone.io/installation/runners/kubernetes/) at local
2020-01-27 | [go-dataeq](https://github.com/suzuki-shunsuke/go-dataeq) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-dataeq.svg)](https://github.com/suzuki-shunsuke/go-dataeq) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-dataeq/dataeq) | go | library | check if two values are equal as data format such as JSON
2019-12-05 | [go-error-with-exit-code](https://github.com/suzuki-shunsuke/go-error-with-exit-code) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-error-with-exit-code.svg)](https://github.com/suzuki-shunsuke/go-error-with-exit-code)  [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-error-with-exit-code/ecerror) | go | library | set the exit code to the error
2019-11-30 | [dd-time](https://github.com/suzuki-shunsuke/dd-time) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/dd-time.svg)](https://github.com/suzuki-shunsuke/dd-time) | go | cli | post the command execution time as time-series data to DataDog
2019-10-18 | [github-cli](https://github.com/suzuki-shunsuke/github-cli) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/github-cli.svg)](https://github.com/suzuki-shunsuke/github-cli) | go | cli | GitHub v3 API client
2019-08-29 | [go-timeout](https://github.com/suzuki-shunsuke/go-timeout) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-timeout.svg)](https://github.com/suzuki-shunsuke/go-timeout) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-timeout/timeout) | go | library | treat the timeout of the external command
2019-08-21 | [cmdx](https://github.com/suzuki-shunsuke/cmdx) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/cmdx.svg)](https://github.com/suzuki-shunsuke/cmdx) | go | cli | task runner
2019-07-06 | [flute](https://github.com/suzuki-shunsuke/flute) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/flute.svg)](https://github.com/suzuki-shunsuke/flute) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-timeout/timeout) | go | library | HTTP Client testing framework
2019-06-12 | [drone-jsonnet-generator](https://github.com/suzuki-shunsuke/drone-jsonnet-generator) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/drone-jsonnet-generator.svg)](https://github.com/suzuki-shunsuke/drone-jsonnet-generator) | go | cli | convert Drone v0.8x format .drone.yml to v1 format .drone.jsonnet
2019-05-21 | [go-jsoneq](https://github.com/suzuki-shunsuke/go-jsoneq) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-jsoneq.svg)](https://github.com/suzuki-shunsuke/go-jsoneq) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-jsoneq/jsoneq) | go | library | check if two values are equal as JSON
2019-05-17 | [go-slack-scimapi](https://github.com/suzuki-shunsuke/go-slack-scimapi) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-slack-scimapi.svg)](https://github.com/suzuki-shunsuke/go-slack-scimapi) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-slack-scimapi/scim) | go | library | Slack SCIM API client
2019-01-19 | [goarg](https://github.com/suzuki-shunsuke/goarg) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/goarg.svg)](https://github.com/suzuki-shunsuke/goarg) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/goarg) | go | library | simple command line argument parser
2018-12-27 | [go-error-handling-logging-practice](https://github.com/suzuki-shunsuke/go-error-handling-logging-practice) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-error-handling-logging-practice.svg)](https://github.com/suzuki-shunsuke/go-error-handling-logging-practice) | go | document | Golang application (not library)'s error handling and logging practice
2018-12-18 | [go-errlog](https://github.com/suzuki-shunsuke/go-errlog) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-errlog.svg)](https://github.com/suzuki-shunsuke/go-errlog) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-errlog) | go | library | logging structured error
2018-12-15 | [go-errctx](https://github.com/suzuki-shunsuke/go-errctx) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-errctx.svg)](https://github.com/suzuki-shunsuke/go-errctx) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](http://godoc.org/github.com/suzuki-shunsuke/go-errctx) | go | library | structured error
2018-12-09 | [durl](https://github.com/suzuki-shunsuke/durl) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/durl.svg)](https://github.com/suzuki-shunsuke/durl) | go | cli | check whether dead urls are included in files
2018-10-28 | [gomic](https://github.com/suzuki-shunsuke/gomic) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/gomic.svg)](https://github.com/suzuki-shunsuke/gomic) | go | cli | generate golang's mock for test
2018-07-23 | [akoi](https://github.com/suzuki-shunsuke/akoi) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/akoi.svg)](https://github.com/suzuki-shunsuke/akoi) | go | cli | binary version control system
2018-07-04 | [gria](https://github.com/suzuki-shunsuke/gria) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/gria.svg)](https://github.com/suzuki-shunsuke/gria) | go | cli | CLI tool for golang's test code scaffolding 
2018-06-03 | [go-gencfg](https://github.com/suzuki-shunsuke/go-gencfg) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-gencfg.svg)](https://github.com/suzuki-shunsuke/go-gencfg) | go | cli | cli tool to generate code for the application specific configuration
2018-04-30 | [go-graylog](https://github.com/suzuki-shunsuke/go-graylog) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-graylog.svg)](https://github.com/suzuki-shunsuke/go-graylog) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-graylog) | go | library | Graylog API client for Golang and terraform provider for Graylog
2018-04-30 | [graylog-mock-server](https://github.com/suzuki-shunsuke/graylog-mock-server) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/graylog-mock-server.svg)](https://github.com/suzuki-shunsuke/graylog-mock-server) | go | library | (deprecated) Graylog mock server
2018-04-18 | [go-ptr](https://github.com/suzuki-shunsuke/go-ptr) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-ptr.svg)](https://github.com/suzuki-shunsuke/go-ptr) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-ptr) | go | library | golang library to convert a literal to pointer
2018-03-28 | [go-set](https://github.com/suzuki-shunsuke/go-set) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-set.svg)](https://github.com/suzuki-shunsuke/go-set) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-set) | go | library | set data structure
2018-01-21 | [go-chatwords](https://github.com/suzuki-shunsuke/go-chatwords) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/go-chatwords.svg)](https://github.com/suzuki-shunsuke/go-chatwords) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/go-chatwords) | go | library | Parse line as chat words
2017-10-29 | [ryml](https://github.com/suzuki-shunsuke/ryml) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ryml.svg)](https://github.com/suzuki-shunsuke/ryml) [![npm version](https://badge.fury.io/js/ryml.svg)](https://badge.fury.io/js/ryml) | node | cli | HTTP Client
2017-10-05 | [git-rm-branch](https://github.com/suzuki-shunsuke/git-rm-branch) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/git-rm-branch.svg)](https://github.com/suzuki-shunsuke/git-rm-branch) | go | cli | Remove git branches
2017-09-16 | [rterror](https://github.com/suzuki-shunsuke/rterror) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/rterror.svg)](https://github.com/suzuki-shunsuke/rterror) [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://pkg.go.dev/github.com/suzuki-shunsuke/rterror) | go | library | Handle runtime error
2017-08-04 | [japanese-holiday-api](https://github.com/suzuki-shunsuke/japanese-holiday-api) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/japanese-holiday-api.svg)](https://github.com/suzuki-shunsuke/japanese-holiday-api) | go | api server | Get japanese holidays
2017-04-01 | [exvar.py](https://github.com/suzuki-shunsuke/exvar.py) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/exvar.py.svg)](https://github.com/suzuki-shunsuke/exvar.py) [![PyPI version](https://badge.fury.io/py/exvar.svg)](https://badge.fury.io/py/exvar) | python | cli | Local repository specific application configuration management framework
2017-03-25 | [cht](https://github.com/suzuki-shunsuke/cht) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/cht.svg)](https://github.com/suzuki-shunsuke/cht) [![PyPI version](https://badge.fury.io/py/cht.svg)](https://badge.fury.io/py/cht) | python | cli | Notify to slack using "incoming webhooks"
2017-03-12 | [ghscr](https://github.com/suzuki-shunsuke/ghscr) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ghscr.svg)](https://github.com/suzuki-shunsuke/ghscr) | go | cli | Get scripts hosted on GitHub
2017-03-08 | [dirssh](https://github.com/suzuki-shunsuke/dirssh) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/dirssh.svg)](https://github.com/suzuki-shunsuke/dirssh) | shell | cli | per-project ssh config manager for zsh
2017-03-03 | [ssh-seed](https://github.com/suzuki-shunsuke/ssh-seed) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ssh-seed.svg)](https://github.com/suzuki-shunsuke/ssh-seed) [![npm version](https://badge.fury.io/js/ssh-seed.svg)](https://badge.fury.io/js/ssh-seed) | node | cli | Generate ssh keys and add them to the ssh agent 
2016-04-16 | [dckrm](https://github.com/suzuki-shunsuke/dckrm) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/dckrm.svg)](https://github.com/suzuki-shunsuke/dckrm) | shell | cli | Remove docker containers and images
2016-01-23 | [pysigma](https://github.com/pysigma) | [![PyPI version](https://badge.fury.io/py/sigma.svg)](https://badge.fury.io/py/sigma) | python | library | Python validation flamework (unfinished)
2015-10-15 | [sqlalchemy-validation](https://github.com/suzuki-shunsuke/sqlalchemy-validation) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/sqlalchemy-validation.svg)](https://github.com/suzuki-shunsuke/sqlalchemy-validation) [![PyPI version](https://badge.fury.io/py/sqlalchemy_validation.svg)](https://badge.fury.io/py/sqlalchemy_validation) | python | library | SQLAlchemy Validation Extension

### CircleCI Orbs

* https://circleci.com/orbs/registry/?query=suzuki-shunsuke%2F&filterBy=all
* [suzuki-shunsuke/terraform](https://circleci.com/orbs/registry/orb/suzuki-shunsuke/terraform)
* [suzuki-shunsuke/orb](https://circleci.com/orbs/registry/orb/suzuki-shunsuke/orb)
* [suzuki-shunsuke/forbid-rerun](https://circleci.com/orbs/registry/orb/suzuki-shunsuke/forbid-rerun)

### Ansible Roles

* https://galaxy.ansible.com/suzuki-shunsuke/
* https://galaxy.ansible.com/search?keywords=suzuki-shunsuke&order_by=-download_count&page=1&page_size=100

---

* [docker_ce_centos](https://galaxy.ansible.com/suzuki-shunsuke/docker_ce_centos)
* [docker-py-centos](https://galaxy.ansible.com/suzuki-shunsuke/docker-py-centos)
* [pyenv](https://galaxy.ansible.com/suzuki-shunsuke/pyenv)
* [pyenv-virtualenv](https://galaxy.ansible.com/suzuki-shunsuke/pyenv)
* [rbenv](https://galaxy.ansible.com/suzuki-shunsuke/rbenv)
* [gvm](https://galaxy.ansible.com/suzuki-shunsuke/gvm)
* [nvm](https://galaxy.ansible.com/suzuki-shunsuke/nvm)
* [akoi](https://galaxy.ansible.com/suzuki-shunsuke/akoi)
* [consul_config](https://galaxy.ansible.com/suzuki-shunsuke/consul_config)
* [prometheus_node_exporter_config](https://galaxy.ansible.com/suzuki-shunsuke/prometheus_node_exporter_config)
* [nginx_centos](https://galaxy.ansible.com/suzuki-shunsuke/nginx_centos)

### Ansible Modules

name | badges | short description
--- | --- | ---
[pyenv-module](https://galaxy.ansible.com/suzuki-shunsuke/pyenv-module) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ansible-pyenv-module.svg)](https://github.com/suzuki-shunsuke/ansible-pyenv-module)  | ansible module to run pyenv command
[ghq-module](https://galaxy.ansible.com/suzuki-shunsuke/ghq-module) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ansible-ghq-module.svg)](https://github.com/suzuki-shunsuke/ansible-ghq-module)  | ansible module to clone git repositories with [motemen/ghq](https://github.com/motemen/ghq)
