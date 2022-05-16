from django import forms

class SettingForm(forms.Form):
    size = forms.fields.ChoiceField(
      choices = (
        ('4', '4×4'),
        ('6', '6×6'),
        ('8', '8×8'),
      ),
      required=True,
      widget=forms.widgets.Select
    )
    time = forms.CharField()