FROM node:16-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
WORKDIR /feline
COPY . .
RUN npm install 
CMD ["npx","vite"]