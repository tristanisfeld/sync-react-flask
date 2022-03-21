from flask import Flask


from flask import Flask, render_template
import os

template_dir = os.path.abspath("./server/app/templates/")
static_dir = os.path.abspath("./server/app/static/")

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
