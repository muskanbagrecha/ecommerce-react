import {
    v4 as uuid
} from "uuid";

import {
    carousel1,
    carousel2,
    carousel3
} from "../../Assets/Images/image"

const brandData = [{
        id: uuid(),
        image: carousel1,
        name: "spring",
    },
    {
        id: uuid(),
        image: carousel2,
        name: "anouk",
    },
    {
        id: uuid(),
        image: carousel3,
        name: "roadsterik"
    },
]

export default brandData;