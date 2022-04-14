const issue = {
  title: "Unable to update branch",
  repositoryNameAssociated: "LaunchX",
  status: "Open",
  numberOfComments: 100,
  labels: ['Github', 'Branch'],
  author: 'julietadelgado',
  dateCreated: '04/13/22',
  lastUpdated: new Date(),
  getTitleAndAuthor: function(){
    return `The issue ${this.title} was created by ${this.author}`
  },
  getGeneralInfo: function(){
    return `General info about issue ${this.title}:\nStatus: ${this.status}\nComments: ${this.numberOfComments}\nLabels: ${this.labels}\nCreated: ${this.dateCreated}\nLast Updated: ${this.lastUpdated}`
  }
 }
 
 console.log("Nombre del issue: " + issue.title)
 console.log(issue.getTitleAndAuthor())
 console.log(issue.getGeneralInfo()) 