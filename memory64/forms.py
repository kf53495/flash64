from django import forms

class SettingForm(forms.Form):
    size = forms.CharField()
    # time = forms.CharField() のちに実装予定