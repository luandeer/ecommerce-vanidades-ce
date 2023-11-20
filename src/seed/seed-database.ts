import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
    //borrar registros previos
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const { categories, products } = initialData;

    const categoriesData = categories.map((name) => ({
        name,
    }));

    await prisma.category.createMany({
        data: categoriesData,
    });

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((map, Category) => {
        map[Category.name.toLowerCase()] = Category.id;
        return map;
    }, {} as Record<string, string>);


    products.forEach( async(product) => {
        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],
            },
        })

        const imagesData = images.map(image => ({
            url: image,
            productId: dbProduct.id,
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })

    });






    console.log("ejecturado corecctamente");
}

(() => {
    if (process.env.NODE_ENV === "production") return;
    main();
})();
