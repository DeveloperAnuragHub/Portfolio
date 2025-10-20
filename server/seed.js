const mongoose = require('mongoose')
const Project = require('./models/project')
require('dotenv').config()

async function run(){
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio'
  await mongoose.connect(uri)
  console.log('Connected')
  await Project.deleteMany({})
  await Project.insertMany([
    { title: 'Portfolio', description: 'This portfolio site', tech: ['React','Node','Express','MongoDB'], repo: '', live: '' },
    { title: 'Blog', description: 'A simple blog', tech: ['React','Express'], repo: '', live: '' }
  ])
  console.log('Seeded')
  process.exit(0)
}
run().catch(err=>{console.error(err);process.exit(1)})
