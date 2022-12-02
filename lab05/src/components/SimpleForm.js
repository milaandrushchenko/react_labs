import * as React from 'react';
import { Box, Button, TextField, Typography, Grid, Container } from "@mui/material";
import { useState } from 'react';


export default function SimpleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, topic, message);


    }
    const handleReset = () => {
        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    }

    const isTopicValid = () => {
        return topic.length > 5 || topic === "";
    }
    const isEmailValid = () => {
        let pattern = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/mg;
        return pattern.test(email) || email.length === 0;
    }

    return (
        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" align={'center'} sx={{ mb: 5 }}>Зворотній зв'язок</Typography>
                <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                fullWidth
                                id="name"
                                label="Ім'я"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                error={!isEmailValid()}
                                helperText={!isEmailValid() ? "Некоректний email" : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="topic"
                                label="Тема"
                                name="topic"
                                value={topic}
                                onChange={handleTopicChange}
                                error={!isTopicValid()}
                                helperText={!isTopicValid() ? "Тема має містити більше символів" : ""}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="textarea"
                                multiline
                                minRows={4}
                                maxRows={6}
                                name="message"
                                label="Повідомлення"
                                id="message"
                                value={message}
                                onChange={handleMessageChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                fullWidth
                                disabled={!isEmailValid() || !isTopicValid()}
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Відправити
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="reset"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleReset}
                            >
                                Очистити
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}