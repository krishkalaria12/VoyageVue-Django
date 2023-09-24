from django.contrib import admin
from .models import Contact , register_table , updatemail
# Register your models here.

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
	list_display = ('name' , 'subject' , 'message') 
	ordering = ('name' ,) 
	search_fields = ('name' , 'subject')

admin.site.register(updatemail)

admin.site.register(register_table)