import {
    v4 as uuid
} from "uuid";

import { testimonial1, testimonial2 } from "../../Assets/Images/image";

const testimonialData = [{
        id: uuid(),
        image: testimonial1,
        name: "Hailey Roberts",
        content: "Would definitely recommend Fashgram and will definitely be ordering again."
    },
    {
        id: uuid(),
        image: testimonial2,
        name: "Lillian Wilson",
        content: "The size, the fitting and the style of the dresses I bought is absolutely amazing!"
    },
]

export default testimonialData;