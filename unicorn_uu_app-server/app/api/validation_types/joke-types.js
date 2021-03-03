/* eslint-disable */
const createJokeDtoInType = shape({
    name: string().isRequired(),
    category: string().isRequired(),
    content: string().isRequired()
  }
);
const getJokeDtoInType = shape({
  id: id().isRequired(),

}
)
const listJokeDtoInType = shape({

}
)
const setRatingJokeDtoInType = shape({
  id:id().isRequired(),
  rating:(1-5)
  }
)
const deleteJokeDtoInType = shape({
  id: id().isRequired(),
  }
)

