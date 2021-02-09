/* eslint-disable */
const createJokeDtoInType = shape({
    name: string().isRequired(),
    category: string(),
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
const deleteJokeDtoInType = shape({
  id: id().isRequired(),
  }
)
