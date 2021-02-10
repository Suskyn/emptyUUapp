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
const categoryJokeDtoInType = shape({

}
)
const createcategoryJokeDtoInType = shape({
    name: string().isRequired(),
    id: id().isRequired()
  }
);
const getcategoryJokeDtoInType = shape({
    id: id().isRequired(),

  }
)
const listcategoryJokeDtoInType = shape({

  }
)
const deletecategoryJokeDtoInType = shape({
  id: id().isRequired(),
  }
)
