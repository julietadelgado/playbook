const pull_request = {
    title: "Adding article to LaunchX",
    author: "julietadelgado",
    branchName: "master",
    dateCreated: new Date(),
    status: "Open",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `The pull request ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Pull request name: " + pull_request.title)
   console.log("Pull request status: " + pull_request.getStatus())
   console.log("Pull request was created on: " + pull_request.dateCreated)
   console.log("Pull request "+ pull_request.title + " is associated to " + pull_request.repositoryNameAssociated + " repository")
   console.log(pull_request.getTitleAndAutor()) 