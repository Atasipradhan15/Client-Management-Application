function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.style.display = 'block';
            setTimeout(() => { toast.style.display = 'none'; }, 2000);
        }

        function signNDA() { showToast("Redirecting to NDA signing page..."); }
        function downloadAgreement() { showToast("Starting agreement download..."); }
        function openProjectTracker() { showToast("Opening Project Tracker..."); }
        function reportBug() { showToast("Redirecting to Bug Reporting system..."); }
        function manageInvoice() { showToast("Opening Invoice Management..."); }
        function accessSupport() { showToast("Opening Support Chat..."); }