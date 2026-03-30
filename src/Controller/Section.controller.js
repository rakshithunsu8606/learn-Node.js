const Section = require("../Model/Section.model");

const getSection=async(req,res)=>{
    try {
        const section=await Section.find()

        console.log(section);

        if (!section) {
            return res.status(400).json({data:null,message:"Section Not get"})
        }
        
        res.status(200).json({data:section,message:'Section Sucess get'})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({data:null,message:'Not get Section'})
    }
}

const addsection=async(req,res)=>{
    try {
        const section=await Section.create(req.body)

        console.log(section);

        if (!section) {
            return res.status(400).json({data:null,message:"Section Not Difend"})
        }
        
        res.status(200).json({data:section,message:'Section Sucess Add'})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({data:null,message:'Not Add Section'})
    }
}

const deletesection=async(req,res)=>{
    try {
        console.log("req",req.params.id);
        
        const section=await Section.findByIdAndDelete(req.params.id)

        console.log(section);

        if (!section) {
            return res.status(400).json({data:null,message:"Section Not Delete"})
        }
        
        res.status(200).json({data:section,message:'Section Sucess Delete'})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({data:null,message:'Not Delete Section'})
    }
}

const upadatesection=async(req,res)=>{
    try {

        let upadte={...req.body}
        const section=await Section.findByIdAndUpdate(
            req.params.id,
            upadte,
            {new:true}
        )

        console.log(section);

        if (!section) {
            return res.status(400).json({data:null,message:"Section Not Upadte"})
        }
        
        res.status(200).json({data:section,message:'Section Sucess Update'})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({data:null,message:'Not Add Section'})
    }
}

module.exports={
    deletesection,
    upadatesection,
    addsection,
    getSection
}