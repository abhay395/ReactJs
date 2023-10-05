import conf from "../conf/conf";
import { Client, ID ,Databases,Storage,Query} from "appwrite";

export class Service{
    clint=new Client()
    databases;
    bucket;
    constructor(){
            this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectecId);
            this.databases=new Databases(this.clint);
            this.bucket=new Storage(this.clint)
    } 

    async createPost({titile,slug,content, featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                titile,
                content,
                featuredImage,
                status,
                userId
            });
        } catch (error) {
            console.log('Appwrite serive:: creatPost:: error',error)
        }
    }
    async updatePost(slug,{titile,content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    titile,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite serive:: creatPost:: updatePost',error)
        }
    }
    async deletepost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
            )
            return true
        } catch (error) {
            console.log('Appwrite serive:: creatPost:: deltepost',error)
            return false
        }
    }
    async getpost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('Appwrite serive:: creatPost:: getpost',error)
            return false
        }
    }
    async getposts(queries= [Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries, 
            )
        } catch (error) {
            console.log("Appwrite service :: getposts ::error",error)
            return false
        }
    }
     // file uplod service
     async updoadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite serviec :: uplodFile :: error',error)
            return false
        }
     }
     async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
              conf.appwritBucketId,
              fileId  
            )
            return true
        } catch (error) {
            console.log('Appwrite serive :: deleteFile :: error',error)
            return false
        }
     }
     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritBucketId,fileId
        )
     }
}
const service=new Service()
export default service;