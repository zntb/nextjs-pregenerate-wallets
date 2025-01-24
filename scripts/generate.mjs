import fetch from "node-fetch";

const url = "https://embedded-wallet.thirdweb.com/api/v1/pregenerate";

const headers = {
  "x-secret-key": "",
  "Content-Type": "application/json",
};

const body = JSON.stringify({
  strategy: "email",
  email: "user@example.com",
});

async function makePostRequest() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

makePostRequest();

// curl -X POST 'https://embedded-wallet.thirdweb.com/api/v1/pregenerate' \
//   -H 'x-ecosystem-id: ecosystem.example-eco-123' \
//   -H 'x-ecosystem-partner-id: 1415d24e-c7b0-4fce-846e-740841ef2c32' \
//   -H 'x-secret-key: 9f8e7d6c5b4a3f2e1d0c9b8a7ffge434b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7' \
//   -H 'Content-Type: application/json' \
//   -d '{
//     "strategy": "email",
//     "email": "user@example.com"
//   }'
