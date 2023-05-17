// Função para verificar se um campo está vazio
function isEmpty(value) {
  return value.trim() === "";
}

// Função para exibir uma mensagem de erro
function showError(container, errorMessage) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error-message");
  errorElement.textContent = errorMessage;
  container.appendChild(errorElement);
}

// Função para remover as mensagens de erro
function hideErrors(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Função para validar o formulário
function validateForm(event) {
  console.log("event", event);
  event.preventDefault();

  const form = event.target;
  const nameInput = form.elements.name;
  const emailInput = form.elements.email;
  const phoneInput = form.elements.phone;
  const messageInput = form.elements.message;
  const showErrorsContainer = document.querySelector(".showErrors");

  // Limpar mensagens de erro
  hideErrors(showErrorsContainer);

  // Verificar campos obrigatórios
  if (isEmpty(nameInput.value)) {
    showError(showErrorsContainer, "Por favor, informe seu nome.");
  }

  if (isEmpty(emailInput.value)) {
    showError(showErrorsContainer, "Por favor, informe seu e-mail.");
  }

  if (isEmpty(phoneInput.value)) {
    showError(showErrorsContainer, "Por favor, informe seu telefone");
  }

  if (isEmpty(messageInput.value)) {
    showError(showErrorsContainer, "Por favor, informe sua mensagem");
  }

  // Se o formulário é válido, pode ser enviado
  if (!showErrorsContainer.hasChildNodes()) {
    form.submit();
  }
}

// Adicionar evento de submit ao formulário
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
