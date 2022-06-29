import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    async getMaterial(args: {text: any, language: String}) {
        let {text, language} = args;

        prisma.itemClass.findMany({
            where: {
                key: "a"      
            }
        })
        return prisma.itemInfo.findMany({
            include: {
                organization: {
                    include: {
                        category: true,
                        class: true, 
                        subclass: true,
                    }
                }
            }
        });
    }
}