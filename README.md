# Random Cat Image Cloudflare Worker

This Cloudflare worker fetches a random cat image from [thecatapi.com](https://thecatapi.com/) and returns it as the response to any incoming request.

## Usage

To use this worker, follow these steps:

1. Log in to your Cloudflare account and go to the Workers section.
2. Create a new worker.
3. Copy and paste the code from [worker.js](./worker.js) into the worker editor.
4. Save and deploy the worker.

Once the worker is deployed, you can test it by sending a GET request to the worker URL. The response will be a random cat image.

## Configuration

By default, this worker returns images in JPEG format and with a cache-control header that allows them to be cached for up to 24 hours. If you want to change these settings, you can modify the `headers` object in [worker.js](./worker.js).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
