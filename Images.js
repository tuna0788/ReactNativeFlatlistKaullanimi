import { faker } from '@faker-js/faker';
export const Images = Array(20).fill(null).map(e=>({
 
    id:faker.string.uuid(),
    image:faker.image.urlLoremFlickr(),


}))