/* eslint-disable */
const categoryDtoInType = shape({

  }
)
const createCategoryDtoInType = shape({
    name: string().isRequired(),
  }
);
const getCategoryDtoInType = shape({
    id: id().isRequired(),

  }
)
const listCategoryDtoInType = shape({

  }
)
const deleteCategoryDtoInType = shape({
    id: id().isRequired(),
  }
)
