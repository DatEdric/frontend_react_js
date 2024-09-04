import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function AddProductComponent() {
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        color: "",
        price: "",
        image: null,
        description: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "photo") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0], // Store the file object
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("size", formData.size);
        data.append("color", formData.color);
        data.append("price", formData.price);
        data.append("image", formData.image); // Append file
        data.append("description", formData.description);

        // Send data to the backend
        fetch("http://localhost:3000/home/add-product", {
            method: "POST",
            body: data, // Send FormData object directly
        })
            .then((response) => response.json())
            .then((data) => console.log("Success:", data))
            .catch((error) => console.error("Error:", error));
    };
    return (
        <Container className="my-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Size</Form.Label>
                    <Form.Control type="number" name="size" value={formData.size} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Color</Form.Label>
                    <Form.Control type="text" name="color" value={formData.color} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Photo</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductComponent;
