document.getElementById('share').addEventListener('click', function () {
            const divToShare = document.getElementById('sharableDiv');

            // Use html2canvas with higher scale for better quality
            html2canvas(divToShare, {
                scale: 3, // Increase scale for higher quality
                useCORS: true // Handle cross-origin images if any
            }).then(canvas => {
                // Convert the canvas to a data URL
                const imageData = canvas.toDataURL('image/png', 1.0); // High-quality PNG

                // Convert the Base64 image to a Blob
                fetch(imageData)
                    .then(res => res.blob())
                    .then(blob => {
                        // Create a file from the Blob
                        const file = new File([blob], 'share-image.png', { type: 'image/png' });

                        if (navigator.canShare && navigator.canShare({ files: [file] })) {
                            navigator.share({
                                files: [file],
                                title: 'Shared via My Webpage',
                                text: 'Check out this high-quality image!',
                            });
                        } else {
                            alert('Sharing is not supported on this browser.');
                        }
                    });
            });
        });
        
        
 document.getElementById("backArrow").addEventListener('click', function() {
     window.location.href = '../homeRR.html';
 });
 document.getElementById("help").addEventListener('click', function() {
     window.location.href = '../help.html';
 });