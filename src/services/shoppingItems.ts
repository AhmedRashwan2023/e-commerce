export const setSearchParams = (
  searchParams: { [key: string]: string | string[] | undefined },
  name: string,
  value: string
) => {
  let params = {};
  if (searchParams.catId) params = { ...params, catId: searchParams.catId };
  if (searchParams.minPrice)
    params = { ...params, minPrice: searchParams.minPrice };
  if (searchParams.maxPrice)
    params = { ...params, maxPrice: searchParams.maxPrice };
  if (searchParams.evaluation)
    params = { ...params, evaluation: searchParams.evaluation };
  if (searchParams.name) params = { ...params, name: searchParams.name };
  if (searchParams.view) params = { ...params, view: searchParams.view };
  if (searchParams.display)
    params = { ...params, display: searchParams.display };
  if (searchParams.orderBy)
    params = { ...params, orderBy: searchParams.orderBy };
  params = { ...params, [name]: value };
  return new URLSearchParams(params);
};
