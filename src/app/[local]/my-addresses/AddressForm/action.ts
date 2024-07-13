"use server";

export const handleAddAddress = async (formData: FormData) => {
  const dataItem = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    firstAddress: formData.get("firstAddress"),
    secondAddress: formData.get("secondAddress"),
    city: formData.get("city"),
    phone: formData.get("phone"),
    postNum: formData.get("postNum"),
    work: formData.get("work"),
    setAsDefault: formData.get("setAsDefault") === "on" ? true : false,
  };
  console.log(dataItem);
};

export const handleUpdateAddress = async (formData: FormData) => {
  const dataItem = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    firstAddress: formData.get("firstAddress"),
    secondAddress: formData.get("secondAddress"),
    city: formData.get("city"),
    phone: formData.get("phone"),
    postNum: formData.get("postNum"),
    work: formData.get("work"),
    setAsDefault: formData.get("setAsDefault") === "on" ? true : false,
  };
  console.log(dataItem);
};
