# Contributing to Hello World

Thanks for helping make programming more approachable. Contributions from first-time and experienced contributors are welcome. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Project Layout

- `index.html`, `styles.css`, and `script.js` make up the static website.
- `source/basic/` contains the standalone Hello World examples.
- `README.md` is the project overview and getting-started page.
- `script.js` contains the language entries rendered by the interactive website.
- `CONTRIBUTORS.md` is the restarted recognition list for merged contributions.

There is no build step or dependency installation. You can open `index.html` directly in a browser. To serve it locally instead, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add a Language Example

1. Check the `languages` array in `script.js` and existing proposals to make sure the language is not already listed. If it is, consider improving the existing example or documentation instead.
2. Add a simple, runnable example under `source/basic/`. Follow the naming and capitalization convention `hello_world.<extension>`.
3. Add an entry to the `languages` array in `script.js` with a readable language name, a short description, and a documentation URL. Follow the existing object format.
4. Keep examples focused on displaying `Hello World`. Avoid extra dependencies and unrelated changes.
5. Add your GitHub username and a short description of your contribution to `CONTRIBUTORS.md` in the pull request.

Other useful contributions include correcting an existing example, improving a language reference, fixing an accessibility or responsive-layout issue, and clarifying project documentation. For larger changes, open an issue first so maintainers can help scope it.

## Local Checks

For changes to `script.js`, run the syntax check if Node.js is installed:

```bash
node --check script.js
```

For website changes, open or serve `index.html` and check the affected behavior at desktop and mobile widths. Run a language example with its interpreter or compiler when available; it is fine to note when a runtime is not installed.

## Submit a Pull Request

1. Fork the repository on GitHub, then clone your fork:

    ```bash
    git clone https://github.com/<your-username>/helloWorld.git
    cd helloWorld
    git remote add upstream https://github.com/apakou/helloWorld.git
    ```

2. Create a focused branch:

    ```bash
    git switch -c add-python-hello-world
    ```

3. Make and check your changes, then commit and push the branch:

    ```bash
    git add source/basic/hello_world.py README.md script.js
    git commit -m "Add Python Hello World example"
    git push -u origin add-python-hello-world
    ```

4. Open a pull request against `main`. Describe what changed and how you checked it. The pull request template includes a short checklist.

For follow-up work, sync your fork with the latest `main` before creating another branch. Please submit one focused contribution per pull request and avoid generated files or unrelated formatting changes.

## Hacktoberfest 2026

Hacktoberfest participants are welcome to contribute here. The 2026 event no longer counts repository pull requests toward rewards; participation is through official local Fests and online activities. See the [official FAQ](https://hacktoberfest.com/questions/) for current rules. A contribution to this project is valuable, but does not itself qualify for Hacktoberfest rewards.
