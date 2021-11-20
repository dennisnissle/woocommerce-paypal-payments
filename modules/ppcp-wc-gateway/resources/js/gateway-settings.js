;document.addEventListener(
    'DOMContentLoaded',
    () => {
        const payLaterMessagingCheckboxes = document.querySelectorAll(
            "#ppcp-message_enabled, #ppcp-message_cart_enabled, #ppcp-message_product_enabled"
        )

        const vaultingCheckboxes = document.querySelectorAll(
            "#ppcp-vault_enabled"
        )

        const payLaterEnabledLabels = document.querySelectorAll(
            ".ppcp-pay-later-enabled-label"
        )

        const payLaterDisabledLabels = document.querySelectorAll(
            ".ppcp-pay-later-disabled-label"
        )

        const disabledCheckboxes = document.querySelectorAll(
            '.ppc-disabled-checkbox'
        )

        function atLeastOneChecked(checkboxesNodeList) {
            return Array.prototype.slice.call(checkboxesNodeList).filter(node => !node.disabled && node.checked).length > 0
        }

        function disableAll(nodeList){
            nodeList.forEach(node => node.setAttribute('disabled', 'true'))
        }

        function enableAll(nodeList){
            nodeList.forEach(node => node.removeAttribute('disabled'))
        }

        function hideAll(nodeList) {
            nodeList.forEach(node => node.style.display = 'none')
        }

        function displayAll(nodeList) {
            nodeList.forEach(node => node.style.display = '')
        }

        function disablePayLater() {
            disableAll(payLaterMessagingCheckboxes)
            hideAll(payLaterEnabledLabels)
            displayAll(payLaterDisabledLabels)
        }

        function enablePayLater() {
            enableAll(payLaterMessagingCheckboxes)
            displayAll(payLaterEnabledLabels)
            hideAll(payLaterDisabledLabels)
        }

        function togglePayLater() {
            atLeastOneChecked(vaultingCheckboxes) ? disablePayLater() : enablePayLater()
        }

        togglePayLater()
        disableAll( disabledCheckboxes )

        vaultingCheckboxes.forEach(node => node.addEventListener('change', togglePayLater));
    }
);
