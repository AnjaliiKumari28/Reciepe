import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Plus, Trash } from 'lucide-react';

export default function AddReciepe() {
  const [imagePreview, setImagePreview] = useState(null);
  const [steps, setSteps] = useState(['']);

  const initialValues = {
    name: '',
    description: '',
    image: null,
    ingredients: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    ingredients: Yup.string().required('Ingredients are required'),
  });

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue('image', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const handleSubmit = (values) => {
    const ingredientsArray = values.ingredients
      .split(',')
      .map((i) => i.trim())
      .filter((i) => i !== '');
    console.log({
      ...values,
      ingredients: ingredientsArray,
      steps,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-orange-50 rounded-2xl shadow-md mt-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-8">Add a New Recipe</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-6">
            <div className='flex flex-col items-start'>
              <label htmlFor="name" className="block text-orange-700 font-semibold mb-1">Name</label>
              <Field
                id="name"
                name="name"
                className="w-full p-3 border rounded-md ring-orange-400 focus:outline-none focus:ring-2"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className='flex flex-col items-start'>
              <label htmlFor="description" className="block text-orange-700 font-semibold mb-1">Description</label>
              <Field
                id="description"
                name="description"
                as="textarea"
                rows="2"
                className="w-full p-3 border rounded-md resize-none ring-orange-400 focus:outline-none focus:ring-2"
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className='flex flex-col items-start'>
              <label className="block text-orange-700 font-semibold mb-2">Image</label>
              <label className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 border border-orange-300 rounded-md w-fit">
                <Plus className="w-4 h-4" /> Choose Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setFieldValue)}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-3 w-full h-48 object-cover rounded-md" />
              )}
            </div>

            <div className='flex flex-col items-start'>
              <label htmlFor="ingredients" className="block text-orange-700 font-semibold mb-1">
                Ingredients (comma separated)
              </label>
              <Field
                id="ingredients"
                name="ingredients"
                as="textarea"
                rows="5"
                className="w-full p-3 border rounded-md resize-none ring-orange-400 focus:outline-none focus:ring-2"
              />
              <ErrorMessage name="ingredients" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className='flex flex-col items-start'>
              <label className="block text-orange-700 font-semibold mb-1">Steps</label>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="mt-2 w-12 text-orange-600 font-semibold">Step {index + 1}</span>
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => handleStepChange(index, e.target.value)}
                      className="flex-1 p-3 border rounded-md ring-orange-400 focus:outline-none focus:ring-2"
                    />
                    {steps.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeStep(index)}
                        className="mt-2 text-red-500 hover:text-red-700"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addStep}
                  className="flex items-center gap-1 text-sm px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-md"
                >
                  <Plus className="w-4 h-4" /> Add Step
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-semibold text-lg"
            >
              Add Recipe
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
