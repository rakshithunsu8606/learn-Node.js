const { UpdateCloudinary, VideoCloudinary, DeleteVideo_Cloud } = require("../../server/Cloudinary");
const Content = require("../Model/Content.model");

const getAllContent = async (req, res) => {
    try {
        const ContentAll = await Content.find();

        if (!ContentAll) {
            return res.status(400).json({ data: null, meassage: "ContentAll Not added" })
        }

        return res.status(200).json({ data: ContentAll, meassage: "ContentAll added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define ContentAll" + error.meassage })
    }
}

const getContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id)

        console.log(content);

        if (!content) {
            return res.status(400).json({ data: null, message: "content Not get" })
        }

        res.status(200).json({ data: content, message: 'content Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get content' })
    }
}

const addContent = async (req, res) => {
    try {
        // console.log("oooo", req.file.path);

        const filesss = req.files

        console.log("filesss", filesss);

        const urls = []

        for (const file of filesss) {
            console.log("err", file.path);

            const obj = await VideoCloudinary(file.path, "video")
            urls.push({
                public_id: obj.public_id,
                url: obj.url
            })
        }


        const content = await Content.create({
            ...req.body, video: urls
        })

        console.log("content", content);

        if (!content) {
            return res.status(400).json({ data: null, message: "content Not Difend" })
        }

        res.status(200).json({ data: content, message: 'content Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add content' })
    }
}

const deleteContent = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const content = await Content.findByIdAndDelete(req.params.id)

        console.log(content);

        for (const videos of content?.video) {
            await DeleteVideo_Cloud(videos?.public_id)
        }

        console.log(content, content?.video);

        if (!content) {
            return res.status(400).json({ data: null, message: "content Not Delete" })
        }

        res.status(200).json({ data: content, message: 'content Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete content' })
    }
}

const upadateContent = async (req, res) => {
    try {
        const contentData = await Content.findById(req.params.id)

        if (!contentData) {
            return res.status(400).json({
                data: null,
                message: "Content not found"
            })
        }

        let updateData = { ...req.body }

        const filesssUpdate = req.files || []

        if (filesssUpdate.length > 0) {

            for (const video of contentData.video) {
                await DeleteVideo_Cloud(video.public_id)
            }


            const urls = []

            for (const file of filesssUpdate) {
                const obj = await VideoCloudinary(file.path, "video")

                urls.push({
                    public_id: obj.public_id,
                    url: obj.url
                })
            }

            updateData.video = urls

        } else {
            updateData.video = contentData.video
        }

        
        const updatedContent = await Content.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        )

        res.status(200).json({
            data: updatedContent,
            message: "Content updated successfully"
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            data: null,
            message: "Update failed"
        })
    }
}

module.exports = {
    deleteContent,
    upadateContent,
    addContent,
    getContent,
    getAllContent
}