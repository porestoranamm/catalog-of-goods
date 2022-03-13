class Spinner {

    render() {
        const html = `
            <div>
                <img src="components/Spinner/img/spinner.svg" />
            </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();