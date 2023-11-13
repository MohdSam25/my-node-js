const { readFileSync, writeFileSync }= require('fs')

const frs = readFileSync('./content/first.txt', 'utf-8')
const sec = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result.txt',`here is the result : ${frs},${sec}`,{flag:'af5p'}
)