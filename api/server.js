const express=require("express"),axios=require("axios"),cheerio=require("cheerio"),cors=require("cors"),{createObjectCsvWriter:r}=require("csv-writer"),app=express();app.use(cors());const scrapeUniversities=async()=>{try{let{data:r}=await axios.get("https://www.topuniversities.com/world-university-rankings/2024?page=0&sort_by=rank&order_by=asc"),t=cheerio.load(r),e=[];return t(".row.row-highlight").each((r,i)=>{let s=t(i).find(".rank").text().trim(),a=t(i).find(".uni-link").text().trim(),n=t(i).find(".country").text().trim(),o=t(i).find(".overall-score").text().trim();try{e.push({rank:parseInt(s),name:a,country:n,score:parseFloat(o)})}catch(c){console.warn(`Failed to parse data for university: ${a}`)}}),e.sort((r,t)=>r.rank-t.rank),e}catch(i){return[]}},saveToCSV=async(t,e="university_rankings.csv")=>{let i=r({path:e,header:[{id:"rank",title:"Rank"},{id:"name",title:"University"},{id:"country",title:"Country"},{id:"score",title:"Score"}]});await i.writeRecords(t)};app.get("/api/universities",async(r,t)=>{try{let e=await scrapeUniversities();e.length>0?(await saveToCSV(e),t.json(e)):t.status(404).json({error:"No data was scraped."})}catch(i){t.status(500).json({error:"An error occurred while fetching university data"})}});const PORT=process.env.PORT||3001;