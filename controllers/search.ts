import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    async getMaterial(args: {_input: any, _category: any, _class: any, _subclass: any}) {
        let { _input, _category, _class, _subclass } = args;

        return prisma.itemInfo.findMany({
            where: {    
                name: {
                    contains: _input,
                    mode: "insensitive"
                },
                organization: {
                    category_key: {
                        equals: _category,
                        mode: "insensitive"
                    },
                    class_key: {
                        equals: _class, 
                        mode: "insensitive"
                    },
                    subclass_key: {
                        equals: _subclass, 
                        mode: "insensitive"
                    }
                }
            },
            include: {
                organization: {
                    include: {
                        category: true,
                        class: true, 
                        subclass: true
                    }
                }
            }
        });
    }
}